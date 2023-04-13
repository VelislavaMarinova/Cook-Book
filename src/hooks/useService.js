
import { useContext, useMemo } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useService = (serviceFactory) => {

    const { token } = useContext(AuthContext);

    console.log(token);

    const service = useMemo(() => serviceFactory(token), [serviceFactory, token]);

    return service;
};
