module BCrypt
  class Password < String
    class << self
      def mongoize(password)
        password.mongoize
      end

      def demongoize(password)
        # password = self.new(password) if password.is_a? String
        case password
        when String then self.new(password)
        when nil then nil
        else password
        end
      end

      def evolve(password)
        password.mongoize
      end
    end

    def mongoize
      self.to_s
    end
  end
end