import React, {useState, useContext, createContext, useEffect} from "react";
import {io} from "socket.io-client"

const socketContext = createContext()


export function ProvideSocket({children}) {
    const socket = useProvideSocket()
    return <socketContext.Provider value={socket}>{children}</socketContext.Provider>
}

export const useSocket = () => {
    return useContext(socketContext)
}

function useProvideSocket() {
    const [socket, setSocket] = useState()


    useEffect(() => {
        setSocket(io("http://localhost:3001"))
    }, [])

    return {
        socket
    }
}