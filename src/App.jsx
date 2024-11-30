import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let judul = "Lagi Trending Nih.."
  let produk2 = [
    {
      judul: "PS4",
      jumlah: 30,
      harga: 50000,
      gambar: ""
    },
    {
      judul: "RTX 5000",
      jumlah: 10,
      harga: 95000
    },
    {
      judul: "iPhone 16",
      jumlah: 9,
      harga: 72000
    },
     {
      judul: "Macbook",
      jumlah: 96,
      harga: 330000
    },
  ]

  return (
    <><div>
    <div>
      <div>
        <h2>{judul}</h2>
      </div>
      <div style={{display: "flex", border: "1px solid black"}}>
        {produk2.map((p) => {
          return <ItemCard judul={p.judul} jumlah={p.jumlah} harga={p.harga} />
        })}

      </div>
    </div>
  </div>     
    </>
  )
  function ItemCard({ judul, jumlah, harga }) {
    return (
      <div style={{ display: 'flex', border: '1px solid black' }}>
        <div>
          <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/5/29/cfee9027-f23b-4ab1-a896-e32fe195365c.jpg.webp?ect=4g" alt="" />
        </div>
        <div style={{ paddingLeft: '10px' }}>
          <h4>{judul}</h4>
          <p>{jumlah} product</p>
          <p>Rp {harga}</p>
        </div>
      </div>
    )
  }
}

export default App
