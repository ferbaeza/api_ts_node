# api_ts_node
##### *Fernando Baeza*


#### Configuration

# Steps

* Install globaly **typescript** and **ts-node** // *sudo npm i typescript ts-node -g*
* You can install **nodemon** globally too.
* Make a project folder and move into
* Init a typescript and node project
* Install the dependencies

```bash 
tsc --init
npm --init -y
npm i express cors dotenv multer mongoose
npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose nodemon -D
```

Once everything is installed open your code_editor
Firts create a **.gitignore** file and attach *node_modules* a *.env* 

# Source

We will deploy a model-view-controller app.
We gonna a start to deploy our project and first at all we will make a folder structure 
```bash
mkdir src
cd src
mkdir routes
mkdir controllers
mkdir config
```
* src
    * config
    * models
    * controllers
    * routes
    * interfaces
    * app.ts



