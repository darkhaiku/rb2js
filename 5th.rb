class GoodDog
    attr_accessor :name, :height, :weight

    def initialize(n, h, w)
        @name = n
        @height = h
        @weight = w
    end

    def speak
        "#{@name} says its #{@height} and #{@weight}!" 
    end

    def change_speak_info(n, h, w)
        @name = n
        @height = h 
        @weight = w 
    end
end

sparky = GoodDog.new('Sparky', '1.50', '20kg')
puts sparky.speak
puts "--- changed informations ---"
sparky.change_speak_info('Sparky', '2.83', '60kg')
puts sparky.speak
