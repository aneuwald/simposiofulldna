import React from 'react'
import styled from 'styled-components'

const LoginForm = ({ list }) => {

    if (!list)
        return <Message>Não possuí nenhum inscrito até o momento</Message>

    return (
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Profissão</th>
                        <th>E-mail</th>
                        <th>WhatsAPP</th>
                        <th>Instagram</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(list).map(dados => {
                        let id = dados[0]
                        let inscrito = dados[1]
                        return (
                            <tr key={id}>
                                <td>{inscrito.nome}</td>
                                <td>{inscrito.profissao}</td>
                                <td>{inscrito.email}</td>
                                <td>{inscrito.telefone}</td>
                                <td>{inscrito.instagram}</td>
                            </tr>
                        )
                    })}
                    <tr></tr>
                </tbody>
            </Table>
    )
}

export default LoginForm

const Message = styled.p`
    text-align: center;
    margin: 100px 10%;
`

const Table = styled.table`
    margin: 20px auto;
    width: 100%;
    border-collapse: collapse;

    th {
        font-size: 0.85em;
        border-bottom: 1px solid black;
    }

    td {
        font-size:0.75em;
        text-align: center;
        border-top: 1px solid #ccc;
        padding: 5px 0;
    }
`
