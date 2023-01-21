class GoodDog
    def initialize(name)
      @name = name
    end
  
    def get_name
      @name
    end
  
    def speak
      "#{@name} says Whoop!"
    end
end
  
  sparky = GoodDog.new("Sparky")
  sparky.get_name
  sparky.speak