class GoodDog
    def initialize(name)
      @name = name
    end
  
    def speak
      "Wooph!"
    end
end
  
sparky = GoodDog.new("Sparky")
sparky.speak