# owl-links-dashboard

Dashboard utilizado para acessar a API [Owl Links API](https://github.com/johnidm/owl-links-api) e manter a área administrativa do projeto [Owl Links](https://github.com/johnidm/owl-links).

####Tecnologias utilizadas

Esse projeto está sendo escrito em:
- [Bootstrap ](http://getbootstrap.com/)
- [jQuery](http://jquery.com/)
- [Angular](https://angular.io/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Yeoman ](http://yeoman.io/)


#### Como contribuir?

Para montar o ambiente de desenvolvimento siga esse tutorial: http://www.johnidouglas.com.br/instalando-node-js-e-npm-no-linux-projeto-owl-links/

Faça um clone do projeto

```bash
git clone https://github.com/johnidm/owl-links-dashboard
```
Atualize as dependências

```bash
npm install | bower install
```


Executando o projeto 
```bash
grunt serve
```

Pronto, agora é codar.


Nota: se o seguinte erro ocorrer `Waiting...Fatal error: watch ENOSPC` execute o comando `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` para resolve-lo.