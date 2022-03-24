# Instalação /Configuracão da aplicação

Para ambientes de desenvolvimento,  deverá obrigatoriamente utilizar o docker para disponibilizar a aplicação em desenvolvimento, para isso é necessário que se tenha o docker e o docker compose instalado e executar o seguinte comando no root da aplicação.

```
# Subindo o Frontend 
--1- docker-compose up -d --build

#listando os container após o build

--docker ps

# instalando as dependências do frontend

--docker-compose exec  reactjs-frontend sh -c "npm install"

# executando aplicação do frontend

--docker-compose exec  reactjs-frontend sh -c "npm start"

# buildando somente o frontend

---docker-compose build  reactjs-frontend-frontend
---docker-compose up -d  reactjs-frontend-frontend


# Visualizando aplicação localhost
* Frontend na porta 80
http://localhost/
