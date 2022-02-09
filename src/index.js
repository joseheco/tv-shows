import './styles.css';


const url = 'https://api.tvmaze.com/singlesearch/shows?q=girls';

const resulData = async () => {
  let res = await fetch(url);
  res = await res.json();
  console.log(res.name)
}

resulData();