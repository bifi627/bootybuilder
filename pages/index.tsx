import React from "react";
import { supabase } from "../api";
import Layout from "../components/Layout";
import { useUser } from "../hooks/hooks";

export default function Home()
{
    const user = useUser();

    return (
        <Layout>
            <div onClick={() =>
            {
                supabase.auth.signOut();
            }}>
                {user?.email}
            </div>
        </Layout>
    )
}
