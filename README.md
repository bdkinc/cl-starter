# Starter for CL programs

This can be used as a starting point for CL programs written for Node on the IBMi. 

It contains:
- logging from [winston](https://github.com/winstonjs/winston)
- http requests from [axios](https://github.com/axios/axios)
- db access via [knex](https://github.com/knex/knex)
- smtp via [nodemailer](https://github.com/nodemailer/nodemailer)
- xlsx generation via [node-xlsx](https://github.com/mgcrea/node-xlsx)
- csv generation via [node-csv](https://github.com/adaltas/node-csv) 
- sftp capabilities via [ssh2-sftp-client](https://github.com/theophilusx/ssh2-sftp-client)
- date formatting via [dayjs](https://github.com/iamkun/dayjs)

The generic.cl file is an example CL program for running the node application. There is an example handler as well as an example repository. Some of the utility functions are already defined. 

This starter uses jsdoc for types and avoiding the compilation step. 
