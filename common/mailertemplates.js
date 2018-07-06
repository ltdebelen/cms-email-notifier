var templates = {
    contract_expiration: "<html> \
    <head> \
        <title></title>\
        <style>\
            table {\
                font-family: Helvetica;\
            }\
            td {\
                padding: 10px;\
            }\
        </style>\
    </head>\
    <body>\
        <table align='center'> \
        <tr>\
                <td>\
                    <center> \
                        <img src='http://www.cecam.es/recursos/imagenes/2calendarios.png' height='40px' width='40px'>\
                    </center>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <p>Good Day!</p>\
                </td>\
            </tr>\
            <tr>\
                <td>Contract # <strong>%s</strong> will expire in\
                    <strong style='color:red'>%s</strong> days</td>\
            </tr>\
            <tr>\
                <td></td>\
            </tr>\
            <tr>\
                <td align='center'>\
                    <p>\
                        <b>\
                            <u>Contract Details</u>\
                        </b>\
                    </p>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <p>Customer Name:\
                        <strong>%s</strong>\
                    </p>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <p>Address:\
                        <strong>%s</strong>\
                    </p>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <p>Contract Reference:\
                        <strong>%s</strong>\
                    </p>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <p>Account Manager:\
                        <strong>%s</strong>\
                    </p>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <p>Business Group:\
                        <strong>%s</strong>\
                    </p>\
                </td>\
            </tr>\
            <tr>\
                <td></td>\
            </tr>\
            <tr>\
                <td>\
                    <i>This is an auto-generated email. Do not reply.</i>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <center>\
                        <sub><a style='color:blue; font-size:10px;'>CMS3 © 2018 </a></sub>\
                    </center>\
                </td>\
            </tr>\
        </table>\
    </body>\
    </html>",
    due_date:
        '<html> \
        <head> \
            <title></title> \
            <style> \
                table { \
                    font-family: Helvetica; \
                } \
                td { \
                    padding: 10px; \
                } \
            </style> \
        </head> \
        <body> \
            <table align="center"> \
                <tr> \
                    <td> \
                        <center> \
                            <img src="http://www.cecam.es/recursos/imagenes/2calendarios.png" height="80px" width="80px"> \
                        </center> \
                    </td> \
                </tr> \
                <tr> \
                    <td align="center"> \
                        <p>Good Day!</p> \
                    </td> \
                </tr> \
                <tr> \
                    <td align="center">Please be informed that the following list of equipment is due for preventive maintenance this month. Kindly \
                        see proposed schedule if workable with your team. If you have other preferred schedule, kindly provide the \
                        date and time so SBG can plot in advance and send notification to our customers \
                    </td> \
                </tr> \
                <tr> \
                    <td></td> \
                </tr> \
                <tr> \
                    <td align="center"> \
                        <i>This is an auto-generated email. Do not reply.</i> \
                    </td> \
                </tr> \
                <tr> \
                    <td> \
                        <center> \
                            <sub> \
                                <a style="color:blue; font-size:10px;">CMS3 © 2018 </a> \
                            </sub> \
                        </center> \
                    </td> \
                </tr> \
            </table> \
        </body> \
    </html>'
}

module.exports = templates