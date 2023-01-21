class GoodDog
    def initialize(name)
      @name = name
    end
  
    def get_name
      @name
    end
  
    def set_name=(name) # (name) can be anything 
      @name = name # name can be anything 
    end
  
    def speak
      "#{@name} says Whoop!"
    end
  end
  
  sparky = GoodDog.new("Sparky")
  sparky.get_name
  sparky.speak
  fido = GoodDog.new("Fido")
  sparky.set_name = "fido"
  fido.speak
  