// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../api";


export default async ( req, res ) =>
{
    try
    {
        const { data, error } = await supabase.from( 'TestTable' ).select( '*' );
        res.status( 200 ).json( data );

    } catch ( error )
    {
        console.error( error );
    }
}
