const { store } = require('@/ContextProvider');
const { useContext } = require('react');
const { AiOutlineArrowLeft, AiFillCamera } = require('react-icons/ai');


function Customizer({ setIntro }) {
    const { setColor, color, setDecal } = useContext(store);
    const colors = [
      '#ccc',
      '#EFBD4E',
      '#80C670',
      '#726DE8',
      '#EF674E',
      '#353934',
    ];
    const decals = ['react', 'three2', 'pmndrs'];
  
    return (
      <section key='custom' className=''>
        <div className='flex justify-end flex-col items-center w-full h-full mb-6'>
          <div className='flex items-center absolute z-10 bottom-6 gap-3'>
            {colors.map((color) => (
              <div
                key={color}
                className='w-7 h-7 border-2 border-white transition-transform rounded-full
                          ease-[cubic-bezier(0.85,_0,_0.15,_1)] cursor-pointer'
                style={{ background: color }}
                onClick={() => setColor(color)}
              ></div>
            ))}
          </div>
        </div>
  
        <div className='absolute left-12 bottom-10'>
          <div className='flex gap-5'>
            {decals.map((decal) => (
              <div key={decal} onClick={() => setDecal(decal)} className=''>
                <img
                  className='w-6 grayscale hover:grayscale-0 hover:scale-125 
                              transition-transform duration-300 cursor-pointer'
                  src={decal + '_thumb.png'}
                  alt='brand'
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            const link = deocument.createElement('a');
            link.setAttribute('download', 'canvas.png');
            link.setAttribute(
              'href',
              document
                .querySelector('canvas')
                .toDataURL('image/png')
                .replace('image/png', 'image/octect-stream')
            );
            link.click()
          }}
          style={{ background: color }}
          className='absolute bottom-10 right-10 flex items-center bg-black text-white
             gap-2 px-3 py-1  rounded'
        >
          DOWNLOAD
          <AiFillCamera size='1.3em' />
        </button>
        <button
          style={{ backgroundColor: color }}
          className='absolute top-10 px-3 py-1 right-10 bg-black rounded flex items-center 
                      gap-2 text-white'
          onClick={() => setIntro(true)}
        >
          GO BACK
          <AiOutlineArrowLeft size='1.3em' />
        </button>
      </section>
    );
  }
  
  export default Customizer