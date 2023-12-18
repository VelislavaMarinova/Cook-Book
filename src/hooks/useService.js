
import {  useMemo } from "react";
import {  useAuthContext } from "../contexts/AuthContext";

export const useService = (serviceFactory) => {

    const { token } = useAuthContext();

    const service = useMemo(() => serviceFactory(token), [serviceFactory, token]);

    return service;
};
