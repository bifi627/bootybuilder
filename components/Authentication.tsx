import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "../api";

const withAuthentication = WrappedComponent =>
{
    const RequiresAuthentication = props =>
    {
        const user = supabase.auth.user();

        const router = useRouter();

        useEffect( () =>
        {
            if ( !user )
            {
                router.push( "/Login" );
            }
        }, [ user ] );

        return user !== undefined && user !== null ? <WrappedComponent {...props} /> : <div>Redirecting to login...</div>;
    };

    return RequiresAuthentication;
};

export default withAuthentication;