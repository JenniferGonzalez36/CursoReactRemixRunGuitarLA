import image from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta(){
  return [
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de música'}
  ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={image} alt="imagen sobre nosotros" />
        <div>
          <p>Aliquam dignissim vitae felis eu elementum. Fusce sit amet purus a turpis ultrices porttitor. Vivamus imperdiet dapibus vestibulum. Mauris ultrices lectus eu quam fermentum, a viverra arcu vehicula. Nulla congue commodo auctor. Donec porta, sem sed sagittis tincidunt, justo nulla pharetra quam, at ultricies dui quam at orci. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta ex posuere, varius dolor ut, interdum nunc. Donec vel nisl elit. Sed sed turpis sed massa varius vestibulum id laoreet massa. Curabitur eu molestie felis.</p>
          <p>Phasellus dignissim turpis eget consectetur scelerisque. Sed ornare finibus cursus. Morbi euismod ligula sit amet sollicitudin iaculis. Suspendisse aliquam, diam vitae tempor mollis, leo velit hendrerit orci, a cursus eros risus vel odio. Morbi finibus egestas venenatis. Pellentesque sit amet mattis dolor. Sed ullamcorper, enim quis maximus maximus, purus nisi suscipit orci, sed maximus velit sapien eu velit. Aenean sed nisl eu ipsum sollicitudin facilisis porttitor et dui. Cras finibus augue nec turpis fermentum, sed sollicitudin massa pulvinar.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros