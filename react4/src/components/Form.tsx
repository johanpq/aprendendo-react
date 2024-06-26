'use client'
import formStyle from "@/components/Form.module.css"
import { SingUpUser } from "@/components/FormEvent"
import { preventForm } from "@/components/FormEvent"

export default function Form() {
    return(
        <div>
            <form onClick={preventForm} className={formStyle.form}>
                <div className={formStyle.container}>
                    <div className={formStyle.login} >
                        <div>
                            <label htmlFor="Itext">Login</label>
                            <div className="input">
                                <input type="text" name="text" id="Itext" placeholder="Username"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Ipassword">Password</label>
                            <div className="input">
                                <input type="text" name="password" id="Ipassword" placeholder="Password"/>
                            </div>
                        </div>
                        <input onClick={SingUpUser} className={formStyle.sendBtn} type="submit" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    )
}