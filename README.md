<h1>Bem vindo ao repositório movies site!</h1>
<h2>Objetivo</h2>
<p>Esse projeto teve como finalidade criar um site que exibisse informações de filmes e séries, e também, treinar o desenvolvimento de software front-end utilizando React.</p>
<h2>Princípais tecnologias utilizadas</h2>
<p>Para desenvolver esse site utilizei principalmente:</p>
<ul>
  <li>Axios</li>
  <li>React</li>
  <li>Redux</li>
  <li>React Redux</li>
  <li>Redux Thunk</li>
  <li>Styled Components</li>
  <li>ESLint</li>
</ul>
<p>Também utilizei a api The Movie Data Base (TMDB), você poderá acessar a documentação da api através do link abaixo:</p>
<a href="https://www.themoviedb.org/documentation/api?language=pt-BR" target="_blank">The Movie Data Base</a>
<h2>Deploy</h2>
<p>O site foi publicado no Render, um serviço para hospedar site e serviços</p>
<p>Você também poderá visualizar o site já publicado acessando o link abaixo:</p>
<a href="https://sharp-movies.onrender.com/movies" target="_blank">Sharp Movies</a>
<h2 id="local-running">Rodando a aplicação localmente</h2>
<p>Também é possível rodar o site localmente, mas para isso deverá primeiramente criar uma conta no the movie data base e solicitar uma chave para a api (api key) <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank">TMDB</a>, se só deseja ver o site pronto recomendo acessar o site através do link: <a href="https://sharp-movies.herokuapp.com/movies" target="_blank">Sharp Movies</a></p>
<p>Também deverá ter o Node.js instalado, para saber mais sobre, acesse o link: <a href="https://nodejs.org/en/" target="_blank">Node.js</a></p>
<p>Para rodar localmente segue os passos abaixo:</p>
<ol>
  <li>Clone o repositório para uma pasta no seu computador utilizando o comando <code>git clone</code></li>
  <li>Entre na pasta do repositório que acabou de clonar e rode o comando <code>npm install</code> para instalar todas as dependências necessárias</li>
  <li>
    <strong>MUITO IMPORTANTE</strong> crie um arquivo com o nome <code>.env</code> na raiz do repositório e nele coloque as seguintes informações:
  </li>
  <pre>
    REACT_APP_API_BASE_URL=https://api.themoviedb.org/3
    REACT_APP_API_KEY={aqui você deve colocar a sua chave que solicitou no The Movie Data Base}
    REACT_APP_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
  </pre>
  <li>Após isso você deverá ser capaz de rodar a aplicação utilizando o comando <code>npm start</code></li>
</ol>
<h2>Testes</h2>
<p>Também é possível rodar os testes localmente, siga os passos da seção <a href="#local-running">"Rodando a aplicação locamente"</a>, e você será capaz de rodar os testes com os seguintes comandos:</p>
<ul>
  <li>Para rodar todos os testes: <code>npm test</code></li>
  <li>Para rodar um arquivo de teste específico: <code>npm test {nome do arquivo}</code></li>
</ul>
<p>Todos os testes se encontram em: <code>src/tests</code></p>
<h2>Próximos passos</h2>
<ul>
  <li>Adicionar suporte do site para mobile</li>
</ul>
<h2>Contato</h2>
<a href="https://www.linkedin.com/in/josimar-souza-brito/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
