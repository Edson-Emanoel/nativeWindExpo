import '../styles/global.css'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'

export default function index() {
  return (
    <View className='bg-zinc-800 w-screen h-screen gap-4 flex flex-col items-center justify-center'>
        <Text className='font-bold text-xl text-indigo-700'>Olá, Mundo!</Text>

        <TouchableOpacity className='bg-gradient-to-r from-indigo-700 to-indigo-900 w-[100px] h-[30px] rounded'>
          <Text className="text-white font-medium h-full mt-1 text-center">Teste Botão</Text>
        </TouchableOpacity>
    </View>
  )
}