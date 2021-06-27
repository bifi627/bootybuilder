import { useState } from "react";
import { supabase } from "../api";

export const useUser = () =>
{
    const [ user, setUser ] = useState( supabase.auth.user() );
    return user;
}