import { io, Socket } from "socket.io-client";
import { CONFIG } from "../../config";
import { PayloadSensorReadings } from "../models/Payload_SensorReadings";
import { Notifications } from "../models/Notifications";
import { WaterActivitiesList } from "../models/WaterActivitiesList";

let socket: Socket;

export const initSocketClient = () => {
    socket = io(CONFIG.websocketUrl, {
        transports: ['websocket'],
        reconnection: true,
    });

    socket.on('connect', () => {
        console.log("Conectado al servidor websocket:", socket.id);
    });

    socket.on('disconnect', () => {
        console.log("Desconectando cliente");
    });
}

export const sendSensorReadings = (sensorReadings: PayloadSensorReadings) => {
    if (socket && socket.connected){
        let userID = sensorReadings.idUser;
        console.log(sensorReadings);
        socket.emit('new_many_sensor_readings', {userID, sensorReadings});
    } else {
        console.log("Sin conexión al Websocket");
    }
}

export const sendNotification = (notification: Notifications) => {
    if (socket && socket.connected){
        let userID = notification.user_id;
        socket.emit('new_notification', { userID, notification });
    } else {
        console.log("Sin conexión al Websocket");
    }
}

export const sendWaterActivities = (waterActivitiesList: WaterActivitiesList) => {
    if (socket && socket.connected){
        let userID = waterActivitiesList.user_id;
        socket.emit('new_water_activities', { userID, waterActivitiesList });
    } else {
        console.log("Sin conexión al Websocket");
    }
}