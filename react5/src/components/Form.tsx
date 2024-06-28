'use client'
import formStyle from './Form.module.css'
import { preventForm } from './FormEvent'
import { ChangeEvent, useState } from 'react'

export default function Form() {
    let userNameSetup
    let passwordSetup

    const [userName, setUsername] = useState<string>('') // * EM TS precisa tipar dessa forma para lidar com string
    const [password, setPaswword] = useState<string>('')

    const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPaswword(event.target.value)
    }

    const login = () => {
        userNameSetup = userName
        passwordSetup = password

        console.log(`O username é: ${userNameSetup} e a senha: ${passwordSetup}`)
    }
    
    return(
        <div>
            <form onClick={preventForm} className={formStyle.form}>
                <div className={formStyle.container}>
                    <div className={formStyle.login} >
                        <div>
                            <label htmlFor="Itext">Login</label>
                            <div className="input">
                                <input onChange={handleUserName} type="text" name="text" id="Itext" placeholder="Username"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Ipassword">Password</label>
                            <div className="input">
                                <input onChange={handlePassword} type="password" name="password" id="Ipassword" placeholder="Password"/>
                            </div>
                        </div>
                        <input onClick={login} className={formStyle.sendBtn} type="submit" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    )
}