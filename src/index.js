import './styles.css';


const url = 'https://api.tvmaze.com/shows';

const resulData = async () => {
  let res = await fetch(url);
  res = await res.json();
  res = res[0]
  return res
}

const display = document.querySelector('#main');

const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `<img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_31/f_auto,q_auto,w_1100/v1621264938/shape/mentalfloss/gettyimages-1072268796.jpg" >
                  <div class="section">
                  <h3>Titulo Show</h3>
                  <p> Raiting</p>
                  <p> Genero </p>
                  <button>Click</button>
                  </div>  `

display.appendChild(card);
