import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';

// --- PEMANGGILAN ASET GAMBAR LOKAL SESUAI FILE YANG DIUNGGAH ---
// Pastikan file-file gambar di bawah sudah kamu masukkan ke dalam folder: assets/images/
const gpuImage = require('../../assets/images/gpu.webp');
const cpuImage = require('../../assets/images/cpu.png');
const ramImage = require('../../assets/images/rom.jpg'); // File rom.jpg berisi gambar RAM
const ssdImage = require('../../assets/images/ram.jpg'); // File ram.jpg berisi gambar SSD

// Data produk yang disesuaikan dengan gambar asli kamu
const productsData = [
  {
    id: 1,
    name: "MSI RTX 4070 Ti Super",
    price: "Rp 12.500.000",
    image: gpuImage,
    hasDiscount: true, // Sesuai syarat nomor 4: memiliki badge OFF
  },
  {
    id: 2,
    name: "Intel Core i7 14th Gen",
    price: "Rp 6.800.000",
    image: cpuImage,
    hasDiscount: false,
  },
  {
    id: 3,
    name: "Corsair Vengeance DDR5",
    price: "Rp 1.950.000",
    image: ramImage,
    hasDiscount: false,
  },
  {
    id: 4,
    name: "Samsung SSD 980 M.2",
    price: "Rp 1.400.000",
    image: ssdImage,
    hasDiscount: false,
  },
];

export default function CatalogScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 5. Responsive: Dibungkus ScrollView agar layout tidak pecah saat HP diputar */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* 2. Header: Judul di tengah dengan flexDirection: 'column' */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>TechGears Store</Text>
          <Text style={styles.headerSubtitle}>Premium Computer Hardware</Text>
        </View>

        {/* 3. Product Grid: Menggunakan flexDirection: 'row' dan flexWrap: 'wrap' */}
        <View style={styles.gridContainer}>
          {productsData.map((product) => (
            <View key={product.id} style={styles.productCard}>
              
              {/* 4. Absolute Positioning: Kotak kecil bertuliskan OFF di pojok kanan atas */}
              {product.hasDiscount && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>OFF</Text>
                </View>
              )}

              {/* Tempat Menampilkan Gambar Produk */}
              <View style={styles.imageWrapper}>
                <Image 
                  source={product.image}
                  style={styles.productImage}
                  resizeMode="contain" // 'contain' menjaga agar seluruh bentuk komponen/box produk terlihat proporsional
                />
              </View>

              <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  // 2. Header Styling (flexDirection: 'column')
  headerContainer: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 4,
  },
  // 3. Grid Layout Styling ('row' pada setiap barisnya via wrap)
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    width: '48%', // Membagi menjadi 2 kolom rapi
    position: 'relative', // Kunci utama agar absolute positioning milik badge mengacu pada card ini
    marginBottom: 16,
    // Efek Shadow/Kardus Elegan
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  imageWrapper: {
    height: 130,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: '#007bff',
  },
  // 4. Absolute Positioning Badge "OFF"
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#dc3545', // Warna merah untuk menarik perhatian
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    zIndex: 2, // Memastikan badge menumpuk di atas gambar
  },
  discountText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});