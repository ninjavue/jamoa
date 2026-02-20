import React from 'react'
import Draggable from '../../components/Draggable'

const New = () => {
  const handleStop = (pos) => {
    console.log('Dropped at', pos)
  }

  return (
    <div style={{ position: 'relative', minHeight: '80vh', padding: 20 }}>
      <Draggable defaultPosition={{ x: 20, y: 20 }} onStop={handleStop}>
        <button type="button" className="btn bg-info-600 hover:bg-info-700 text-white rounded-lg px-5 py-2">Publish</button>
      </Draggable>

      <Draggable defaultPosition={{ x: 200, y: 20 }}>
        <div className="card p-4 bg-white rounded shadow">Kartochka elementi</div>
      </Draggable>

      <Draggable defaultPosition={{ x: 20, y: 120 }}>
        <div style={{ padding: 10, background: '#205303ff', borderRadius: 8 }}>Matn blok — uni sudrab joylashtiring</div>
      </Draggable>
    </div>
  )
}

export default New
