module.exports = {
    register: {
        fieldName:'//*[@id="name"]',
        fieldEmail:'//*[@id="email"]',
        fieldPassword:'//*[@id="password"]',
        btnRegister:'//button[text()="daftar"]',
        linkRegister:'//a[text()="ingin mencoba, daftar ?"]'
    },
    login: {
        fieldEmail:'//*[@id="email"]',
        fieldPassword:'//*[@id="password"]',
        btnLogin:'//button[text()="login"]'
    },
    dashboard: {
        storeName:'//dt[contains(text(),"Sinar Jaya")]',
        greeting:'//dd[contains(text(),"hai")]'
    },
    category: {
        menu:'//*[@href="/categories"]',
        btnAdd:'//*[@href="/categories/create"]',
        fieldName:'//*[@data="nama,,function () { [native code] }"]',
        fieldDescription:'//*[@data="deskripsi,,function () { [native code] }"]',
        btnSave:'//button[contains(text(),"simpan")]'
    },
    customer: {
        PelangganMenu:'(//*[@href="/customers"])[1]',
        BtnAddPelanggan:'//*[@href="/customers/create"]',
        FieldNamaPelanggan:'//*[@data="nama,,function () { [native code] }"]',
        FieldNoHPPelanggan:'//*[@data="no.hp,,function () { [native code] }"]',
        FieldAlamatPelanggan:'//*[@data="alamat,,function () { [native code] }"]',
        BtnSimpan:'//button[contains(text(),"simpan")]'
    },
    purchase: {
        PembelianMenu:'//*[@href="/purchases"]',
        BtnAdd:'//*[@href="/purchases/create"]',
        BtnProduk:'//button[text()="produk"]',
        FieldSearchProduct:'//*[@class="chakra-input css-2s2hk4"]',
        SelectedProduct:'(//td[@class="css-u3dlpe"])[1]',
        FieldJumlah:'//*[@inputmode="numeric"]',
        BtnSimpan:'//button[contains(text(),"Simpan")]'
    },
    user: {
        PenggunaMenu:'//*[@href="/users"]',
        BtnAddPengguna:'//*[@href="/users/create"]',
        FieldNamaPengguna:'//*[@data="nama,,function () { [native code] }"]',
        FieldEmailPengguna:'//*[@data="email,,function () { [native code] }"]',
        FieldPasswordPengguna:'//*[@data="password,,function () { [native code] },password"]',
        BtnSimpan:'//button[contains(text(),"simpan")]'
    },
    sales: {
        PenjualanMenu:'//*[@href="/sales"]'
    },
    product: {
        ProdukMenu:'//*[@href="/products"]',
        BtnAdd:'//*[@href="/products/create"]',
        FieldCode:'#kode',
        FieldNama:'//*[@id="nama"]',
        FieldHargaBeli:'//*[@id="harga beli"]',
        FieldHargaJual:'//*[@id="harga jual"]',
        FieldStok:'//*[@id="stok"]',
        FieldDropdownKategori:'//*[@id="kategori"]',
        SearchCategoryField:'//*[@placeholder="cari"]',
        selectCategory:'(//td[@class="css-u3dlpe"])[1]',
        BtnSimpan:'//button[contains(text(),"simpan")]'
    }
}