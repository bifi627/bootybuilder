import { makeAutoObservable } from "mobx";
import { supabase } from "../../api";

export class LoginViewModel
{
    public email = "asd";
    public password = "";
    public error: Error = undefined;

    constructor()
    {
        makeAutoObservable( this );
    }

    public async login()
    {
        console.log( "asdasd" );
        const response = await supabase.auth.signIn( { email: this.email, password: this.password } );

        console.log( { response } );

        this.error = response.error !== undefined ? response.error : undefined;

        return response;
    }

    public async register()
    {
        const response = await supabase.auth.signUp( { email: this.email, password: this.password } );

        this.error = response.error !== undefined ? response.error : undefined;

        return response;
    }

    public async logout()
    {
        const response = await supabase.auth.signOut();

        this.error = response.error !== undefined ? response.error : undefined;

        return response;
    }
}