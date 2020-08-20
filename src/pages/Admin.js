import React, { useState } from 'react'

import LoginForm from '../components/LoginForm'
import ListInscritos from '../components/ListInscritos'

const Admin = () => {

    const [inscritos, setInscritos] = useState('notInitialized')

    if (inscritos === 'notInitialized')
        return <LoginForm setInscritos={setInscritos} />
    else
        return <ListInscritos list={inscritos} />
}

export default Admin

