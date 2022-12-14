import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);



    useEffect(() => {
        if (email) {
            fetch(`https://resale-books-server-anny27-pixel.vercel.app//${email}`)
                .then((res) => res.json())
                .then((user) => {
                    console.log(user);
                    if (user.role === "admin") {
                        setIsAdmin(true);
                        setIsAdminLoading(false);
                    }
                    setIsAdminLoading(false);
                });
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
};

export default useAdmin;