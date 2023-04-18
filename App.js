import { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './assets/styles/styles1'
export default function App() {
  // Definir las variables de estado para cada control que contenga datos
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  // Metodos
  const calcular = (operador) => {
    // Validación de los valores 1 y 2 que no estén vacíos
    if (valor1 != "" && valor2 != "") {
      let mresultado = 0;
      switch (operador) {
        case '+':
          mresultado = parseFloat(valor1) + parseFloat(valor2);
          break;
        case '-':
          mresultado = parseFloat(valor1) - parseFloat(valor2);
          break;
        case '*':
          mresultado = parseFloat(valor1) * parseFloat(valor2);
          break;
        case '/':
          mresultado = parseFloat(valor1) / parseFloat(valor2);
          break;
      }
      // Asignar el contenido de mresultado a la vble de estado resultado
      setResultado(mresultado.toFixed(2))
      setMensajeError("")
    }
    else{
      setMensajeError("Debe ingresar los 2 valores")
    }
  }
  return (
    <View style={styles.container}>
      <View style={[styles.fondo, { flex: 1 }]}>
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
          source={require('./assets/images/calc.jpg')}
        />
      </View>
      <View style={[{ flex: 4, alignItems: 'center', justifyContent: 'center' }, styles.fondo]}>
        <Text style={{ marginBottom: 10 }}>Calculadora Básica</Text>
        <TextInput
          placeholder='Ingrese valor 1'
          style={styles.inputs}
          onChangeText={valor1 => setValor1(valor1)}
          value={valor1}
        />
        <TextInput
          placeholder='Ingrese valor 2'
          style={[styles.inputs, { marginTop: 10 }]}
          onChangeText={valor2 => setValor2(valor2)}
          value={valor2}
        />
        <Text style={{ marginTop: 10 }}>Resultado</Text>
        <Text>{resultado}</Text>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: 'green' }]}
            onPress={()=>calcular('+')}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: 'red' }]}
            onPress={()=>calcular('-')}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: 'yellow' }]}
            onPress={()=>calcular('*')}
          >
            <Text>*</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: 'purple' }]}
            onPress={()=>calcular('/')}
          >
            <Text style={{ color: 'white' }}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: 'black' }]}
            onPress={()=>{
              setValor1('')
              setValor2('')
              setResultado('')
            }}
          >
            <Text style={{ color: 'white' }}>C</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color:'red'}}>{mensajeError}</Text>


      </View>
      <View style={[{ flex: 1 }, styles.fondo]}>
        <Text style={{ textAlign: 'center' }}>Derechos Reservados</Text>
      </View>


    </View>
  );
}


