#Summary
This project was created by Isaac Arismendi, for the backend test


## For backend (normal):
1. Install MongoDB.
2. Setup project database in: `src/config/index`
3. In element mongo write: ip:port of mongo
4. Run `npm install`
5. Run `npm run seed`
6. Run `npm start`
7. Navigate to `http://localhost:3000/api/docs/` to see API documentation.

## For backend (with docker):
1. Install docker and docker-compose
2. Run `npm run docker`
3. Navigate to `http://localhost: 3000/api/docs/` to see API documentation.

## Kubernetes
The kubernetes configuration is found on the folder `kubernetes`, it's important to add that it must be have a database of MongoDB for the project works. The connection route for MongoDB is must be put on file `kubernetes/config.yaml`
