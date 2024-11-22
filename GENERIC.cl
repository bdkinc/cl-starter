PGM
    ADDENVVAR ENVVAR(QIBM_MULTI_THREADED) +
        VALUE(Y) REPLACE(*YES)
    ADDENVVAR ENVVAR(QIBM_QSH_CMD_OUTPUT) +
        VALUE('FILE=/bdk/app/logs/generic.log') REPLACE(*YES)
    ADDENVVAR ENVVAR(QIBM_QSH_CMD_ESCAPE_MSG) +
        VALUE(Y) REPLACE(*YES)

    QSH CMD('/QOpenSys/pkgs/bin/node /bdk/app/src/handlers/generic.js')

    MONMSG MSGID(QSH0000) EXEC(DO)
        SNDMSG MSG('PROCESS FAILED CHECK /bdk/app/logs') +
        TOUSR(QSYSOPR)
    ENDDO
ENDPGM
