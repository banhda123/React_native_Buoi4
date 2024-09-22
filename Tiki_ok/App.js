
import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const [price, setPrice] = useState(141800); 
  const [discount, setDiscount] = useState(0);

  const handleApplyDiscount = () => {
   //gia su ma giam gia la DISCOUNT10 giam 10% gia
    if (discountCode === 'DISCOUNT10') {
      setDiscount(0.1 * price * quantity);
    } else {
      setDiscount(0);
    }
  };

  const totalPrice = price * quantity - discount;

  return (
    <SafeAreaView style={styles.container}>
    
      <Card style={styles.card}>
        <Image source={require("./book.PNG")} style={styles.image} />
        <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
        <Text style={styles.subtitle}>Cung cấp bởi Tiki Trading</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Giá: {price.toLocaleString()} VND</Text>
          <View style={styles.quantityContainer}>
            <Button title="-" onPress={() => setQuantity(quantity - 1)}disabled={quantity <= 1} />
            <Text style={styles.quantity}>{quantity}</Text>
            <Button title="+" onPress={() => setQuantity(quantity + 1)}  />
          </View>
        </View>
        <View style={styles.discountContainer}>
          <Text style={styles.discountLabel}>Mã giảm giá:</Text>
          <TextInput 
            style={styles.input} 
            value={discountCode} 
            onChangeText={setDiscountCode} 
          />
          <Button title="Áp dụng" onPress={handleApplyDiscount} />
        </View>
      </Card>
      <View style={styles.giftVoucherContainer}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/Urbox? Nhập tại đây</Text>
      </View>
      <View style={styles.tempPriceContainer}>
        <Text>Tạm tính: {totalPrice.toLocaleString()} VND</Text>
      </View>
      <View style={styles.totalPriceContainer}>
        <Text>Thành tiền: {totalPrice.toLocaleString()} VND</Text>
      </View>
      <Button title="Tiến hành đặt hàng" onPress={() => alert('Proceeding to checkout')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 2,
   
  },
  card: {
    padding: 26,
    marginVertical: 9,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
    left: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  priceContainer: {flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e91e63',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  discountLabel: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    flex: 1,
    marginRight: 8,
    borderRadius: 4,
  },
  giftVoucherContainer: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  tempPriceContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  totalPriceContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
});