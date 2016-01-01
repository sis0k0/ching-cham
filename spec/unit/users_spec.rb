require_relative '../spec_helper'

describe 'Model::UserModel', :unit do
  let(:valid_username) { 'gosho' }
  let(:another_valid_username) { 'pesho' }
  let(:invalid_username) { 'some.with.dot' }
  let(:too_short_username) { 'kylo' }
  let(:too_long_username) { 'jarjarbinksjarja' }

  let(:valid_email) { 'gosho@gmail.com' }
  let(:another_valid_email) { 'valid@email.com' }
  let(:invalid_email) { 'dz@dz' }

  let(:default_role) { 'user' }
  let(:admin_role) { 'admin' }
  let(:invalid_role) { 'shalqlq' }

  let(:password) { 'random_pass' } # it is neither validated, nor hashed at model level

  describe 'Creates User', :unit do
    def teardown
      User.delete_all
    end

    def create_user
      User.create(
        username: valid_username,
        email: valid_email,
        password: password,
      )
    end

    it 'creates when given valid data' do
      User.create(
        username: valid_username,
        email: valid_email,
        password: password,
      )

      User.count.must_equal 1
      User.first.role.must_equal default_role
      User.first.username.must_equal valid_username
      User.first.email.must_equal valid_email
      User.first.registered_at.wont_be_nil
    end

    it 'does not create with duplicating username' do
      create_user
      User.create(
        username: valid_username,
        email: another_valid_email,
        password: password,
      )

      User.count.must_equal 1
    end
    it 'does not create with duplicating email' do
      create_user
      User.create(
        username: another_valid_username,
        email: valid_email,
        password: password,
      )

      User.count.must_equal 1
    end

    it 'does not create when given invalid username' do
      User.create(
        username: invalid_username,
        email: valid_email,
        password: password,
      )
      
      User.count.must_equal 0
    end

    it 'does not create when given too short username' do
      User.create(
        username: too_short_username,
        email: valid_email,
        password: password,
      )

      User.count.must_equal 0
    end

    it 'does not create when given too long username' do
      User.create(
        username: too_long_username,
        email: valid_email,
        password: password,
      )

      User.count.must_equal 0
    end

    it 'does not create when given invalid email' do
      User.create(
        email: invalid_email,
        username: valid_username,
        password: password,
      )

      User.count.must_equal 0
    end

    it 'sets role when given the default' do
      User.create(
        role: default_role,
        username: valid_username,
        email: valid_email,
        password: password,
      )

      User.count.must_equal 1
      User.first.role.must_equal default_role
    end

    it 'sets role when given the admin role' do
      User.create(
        role: admin_role,
        username: valid_username,
        email: valid_email,
        password: password,
      )

      User.count.must_equal 1
      User.first.role.must_equal admin_role
    end

    it 'does not create when given invalid role' do
      User.create(
        role: invalid_role,
        username: valid_username,
        email: valid_email,
        password: password,
      )

      User.count.must_equal 0
    end
  end

  describe 'Deletes both User and his scores', :unit do
    def teardown
      User.delete_all
      Test.delete_all
      Score.delete_all
    end

    it 'populates deleting to scores' do
      User.create(
        username: valid_username,
        email: valid_email,
        password: password,
        scores: [Score.new(points: 100), Score.new(points: 200)],
      )
      User.first.delete
      Score.count.must_equal 0
    end

    it 'populates deleting to test scores' do
      score = Score.new(points: 100)
      User.create(
        username: valid_username,
        email: valid_email,
        password: password,
        scores: [score]
      )
      Test.create(
        name: 'valid name',
        scores: [score],
      )

      User.first.delete
      Test.first.scores.size.must_equal 0
    end
  end
end