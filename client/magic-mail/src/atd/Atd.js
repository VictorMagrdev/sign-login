import React, { useState } from 'react'
import { Box, Modal, Typography } from "@mui/material";

const Politica = {
    title : `POLÍTICA GENERAL DE TRATAMIENTO DE DATOS PERSONALES 
    CLIENTES, PROSPECTOS DE CLIENTES, FUNCIONARIOS, PROVEEDORES Y VISITANTES
    
    ENTRADA EN VIGENCIA: OCTUBRE DE 2023
    ÚLTIMA VERSIÓN: OCTUBRE DE 2023
    
    INTRODUCCIÓN`,
    text1 : `
    Nombre pág. S.A.S. (en adelante, Nombre pág) es responsable de los Datos Personales e información que le suministran sus clientes, prospectos de clientes proveedores, contratistas, y visitantes (en adelante, los Titulares).

    En la presente Política de Tratamiento se establecen las finalidades, medidas y procedimientos de las Bases de Datos de Nombre pág así como los mecanismos con que los Titulares cuentan para conocer, actualizar, rectificar, suprimir los datos suministrados o revocar la autorización que se otorga con la aceptación de la presente Política de Tratamiento.

    La aceptación de propuestas, la celebración de contratos, el diligenciamiento de formatos, el acceso a los Servicios de la página web www.nombrepág.co (en adelante la Página Web) y/o la aceptación expresa o inequívoca de las presente políticas, implica la aceptación de los Titulares de la Política de Tratamiento y Protección de Datos Personales y su autorización para los usos y otros tratamientos que aquí se describen.
    `,
    text2 : `
    DEFINICIONES
    Para los efectos de la presente Política de Privacidad, se entiende por:
    1.1. Dato personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.
    1.2. Dato público: Dato personal que no es semiprivado, privado o sensible. Entre otros, son los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros y documentos públicos.
    1.3. Dato Privado: Es el dato que por su naturaleza íntima o reservada sólo es relevante para el Titular.
    1.4. Dato personal sensible: Se entiende como datos sensibles aquellos que afecten la intimidad del titular o cuyo uso indebido pueda afectar la intimidad del Titular o la potencialidad de generar su discriminación.
    1.5. Dato personal semiprivado: son aquellos datos que no tienen una naturaleza íntima, reservada, ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular, sino a un grupo de personas o a la sociedad en general. En este caso, para su Tratamiento se requiere a autorización expresa del Titular de la información. Por ejemplo: datos de carácter financiero, datos relativos a las relaciones con las entidades de seguridad social (EPS, AFP, ARL, Cajas de Compensación).
    1.6. Base de Datos: Conjunto organizado de Datos Personales que sea objeto de Tratamiento. Para los efectos del presente documento se entiende como Base de Datos, aquella que contiene información de los Titulares.
    1.7. Titular: Persona natural cuyos Datos Personales sean objeto de Tratamiento. Para los efectos del presente documento se entiende como Titulares, a los proveedores, contratistas, colaboradores, clientes, usuarios y visitantes de Nombre Pág.
    1.8. Responsable del Tratamiento: Es la Persona natural o jurídica de naturaleza pública o privada, que, actuando por ella misma o con otros, decida sobre la Base de Datos y/o el Tratamiento de los datos. Para los efectos de la presente Política para el Tratamiento de Datos Personales se entiende como Responsable del Tratamiento a Nombre Pág.
    1.9. Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento (Nombre Pág).
    1.10. Tratamiento: Cualquier operación o conjunto de operaciones sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación o supresión.
        `
}

export const Atd = () => {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    }
    return(
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    
                    <Typography variant="h6" gutterBottom>
                        Politica.title
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Politica.text1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Politica.text2
                    </Typography>
                    </Box>
            </Modal>
        </>
    );
}