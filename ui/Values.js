import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
} from 'react-native';

// functional stateless componenet

const Values = ({ tipPercent, bill }) => {
    let tip = 0.00;
    let total = 0.00;
      if (bill){
        tip = parseFloat(bill) * tipPercent;
        total = parseFloat(bill) + tip;
        tip = (Math.round(tip * 100) / 100).toFixed(2)
        total = (Math.round(total * 100) / 100).toFixed(2)
      }
    return (
        <View>
            <Text>
                ${tip}
            </Text>
            <Text>
                ${total}
            </Text>
        </View>
    )
}

export default Values
