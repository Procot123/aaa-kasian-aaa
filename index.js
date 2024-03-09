// Pastikan MetaMask diinstal dan diaktifkan di browser

// Inisialisasi Web3 menggunakan MetaMask provider
async function initMetaMask() {
    // Cek apakah ada window.ethereum (MetaMask)
    if (window.ethereum) {
      try {
        // Request a connection to the MetaMask provider
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Inisialisasi Web3 menggunakan MetaMask provider
        const web3 = new Web3(window.ethereum);
  
        // Sekarang Anda dapat menggunakan web3 untuk berinteraksi dengan blockchain
        console.log('Connected to MetaMask');
  
        // Contoh: Mendapatkan alamat dompet pengguna
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        console.log('User Address:', userAddress);
  
        // Lanjutkan dengan operasi blockchain lainnya di sini
  
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  }
  
  // Panggil fungsi untuk menginisialisasi koneksi dengan MetaMask
  initMetaMask();
  