# ProjetoViaAzul

## Banco MongoDB

Deixar um shell para Node Server
```node server```

Abrir outro Shell para iniciar o mongod

	cd c:\mongodb\bin
	mongod

Abrir outro shell em caso de se inserir os dados por linha de comando

	use contactlist
	db.contactlist.insert({name: '.....', email: '....', number: '.....'})
	db.contactlist.find()
	db.contactlist.find().pretty()

Instalar Body

	npm install body-parser
