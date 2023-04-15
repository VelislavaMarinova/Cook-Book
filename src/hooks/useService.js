
import {  useMemo } from "react";
import {  useAuthContext } from "../contexts/AuthContext";

export const useService = (serviceFactory) => {

    const { token } = useAuthContext();

    console.log(token);

    const service = useMemo(() => serviceFactory(token), [serviceFactory, token]);

    return service;
};
