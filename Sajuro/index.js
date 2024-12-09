function showContent(section) {
    let content = document.getElementById('content');
    switch(section) {
        case 'resumen':
            content.innerHTML = `<h2>Resumen Ejecutivo</h2>
            <p>Este proyecto de juego tiene como objetivo principal entretener, aunque está inspirado en la teoría de conjuntos (TDC). Los jugadores pueden disfrutar de diferentes modos de juego y mecánicas como pistas, cartas y chat, tanto en modo solitario como multijugador. El juego se adapta a dos temáticas (noche y día), y presenta una dinámica interactiva en la que los jugadores arrastran y sueltan elementos hacia o desde conjuntos.</p>`;
            break;
        case 'descripcion':
            content.innerHTML = `<h2>Descripción del Proyecto</h2>
            <p>El juego ofrece dos temáticas principales: noche y día. Los jugadores pueden elegir entre seis modos de juego: deportes, música, moda, animales, cultura, y comida. Si bien el juego puede jugarse de forma individual, también cuenta con un modo multijugador para que los jugadores se diviertan con amigos. La teoría de conjuntos se aplica en la mecánica de arrastrar elementos hacia o desde conjuntos. A pesar de su base teórica, el objetivo principal es brindar una experiencia de entretenimiento.</p>`;
            break;
        case 'solucion':
            content.innerHTML = `<h2>Solución Propuesta</h2>
            <p>La tecnología utilizada para el desarrollo incluye SQL, Visual Studio Code, Figma, entre otras herramientas. El juego contará con un sistema de login, un modo multijugador que gestionará partidas en un servidor, y un chat integrado. La interacción de los jugadores se basa en arrastrar elementos hacia los conjuntos para completar desafíos en las diferentes categorías.</p>`;
            break;
        case 'trabajo':
            content.innerHTML = `<h2>Plan de Trabajo</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Fase</th>
                        <th>Fecha de inicio</th>
                        <th>Fecha de finalización</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Planificación y análisis</td><td>5 de junio</td><td>15 de junio</td></tr>
                    <tr><td>Diseño de interfaz y mockups</td><td>16 de junio</td><td>30 de junio</td></tr>
                    <tr><td>Desarrollo de backend</td><td>1 de julio</td><td>20 de julio</td></tr>
                    <tr><td>Desarrollo de frontend</td><td>21 de julio</td><td>15 de agosto</td></tr>
                    <tr><td>Implementación del multijugador</td><td>16 de agosto</td><td>5 de septiembre</td></tr>
                    <tr><td>Pruebas y corrección</td><td>6 de septiembre</td><td>30 de octubre</td></tr>
                    <tr><td>Mejoras finales y entrega</td><td>1 de noviembre</td><td>20 de noviembre</td></tr>
                </tbody>
            </table>`;
            break;
        case 'presupuesto':
            content.innerHTML = `<h2>Presupuesto</h2>
            <p>No se han generado gastos financieros en el desarrollo del juego, ya que se utilizan tecnologías y herramientas gratuitas o accesibles.</p>`;
            break;
        case 'mantenimiento':
            content.innerHTML = `<h2>Mantenimiento y Soporte</h2>
            <p>El juego se mantendrá mediante mejoras continuas, que incluirán nuevas funcionalidades y la corrección de errores detectados. El objetivo es optimizar la experiencia del jugador sin realizar cambios drásticos, enfocándose en ajustes incrementales.</p>`;
            break;
        case 'historias':
            content.innerHTML = `<h2>Historias de Usuario</h2>
            <ul>
                <li>Como jugador, quiero poder elegir entre diferentes modos de juego (deportes, música, moda, etc.) para tener variedad en mi experiencia de juego.</li>
                <li>Como usuario registrado, quiero poder iniciar sesión con mi nombre de usuario y contraseña para acceder a mi perfil y mis estadísticas de juego.</li>
                <li>Como jugador, quiero poder arrastrar elementos hacia los conjuntos correctos para completar los desafíos y avanzar en el juego.</li>
                <li>Como jugador multijugador, quiero poder crear o unirme a una sala con mis amigos para competir en partidas en tiempo real.</li>
                <li>Como usuario, quiero poder chatear con otros jugadores durante una partida multijugador para comunicarme y compartir estrategias.</li>
                <li>Como jugador, quiero poder desbloquear nuevos niveles o modos de juego al completar desafíos, para mantenerme motivado a seguir jugando.</li>
                <li>Como jugador, quiero recibir un mensaje claro cuando gane o pierda una partida para entender mi progreso en el juego.</li>
            </ul>`;
            break;
            case 'requerimientos':
                content.innerHTML = `
                    <h3>Requerimientos Funcionales</h3>
                    <ul>
                        <li><strong>Login de Usuario:</strong>
                            <ul>
                                <li>Entradas: Nombre de usuario y contraseña.</li>
                                <li>Salida: Acceso al menú principal del juego.</li>
                                <li>Proceso: Verificación de credenciales y autenticación de usuarios.</li>
                            </ul>
                        </li>
                        <li><strong>Selección de Modo de Juego:</strong>
                            <ul>
                                <li>Entradas: Selección entre modo solitario y multijugador.</li>
                                <li>Salida: Acceso a la pantalla de selección de categorías.</li>
                            </ul>
                        </li>
                        <li><strong>Selección de Categoría:</strong>
                            <ul>
                                <li>Entradas: Selección de una de las seis categorías (deportes, música, cultura, moda, animales, comida).</li>
                                <li>Salida: Acceso a los niveles correspondientes a la categoría seleccionada.</li>
                            </ul>
                        </li>
                        <li><strong>Juego de Nivel:</strong>
                            <ul>
                                <li>Entradas: Respuestas del jugador en el contexto del nivel seleccionado.</li>
                                <li>Salida: Evaluación de la respuesta y avance o retroceso de nivel.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Requerimientos No Funcionales</h3>
                    <ul>
                        <li><strong>Interfaz de Usuario:</strong> El sistema debe tener una interfaz gráfica intuitiva y fácil de navegar.</li>
                        <li><strong>Rendimiento:</strong> El juego debe cargar cada nivel en menos de 60 segundos.</li>
                        <li><strong>Seguridad:</strong> Los datos de usuario, incluyendo credenciales de login, deben ser almacenados y manejados de manera segura.</li>
                    </ul>
                `;
                break;
                case 'mer':
                content.innerHTML = `
                    <h2>MER</h2>
                     <p>A continuación se presenta el Modelo Entidad-Relación del sistema:</p>
                     <a href="docs/MER.pdf" target="_blank" class="btn btn-primary">Ver MER</a>
                     `;
                    break;
                    case 'hardware':
                content.innerHTML = `
                        <h2>Requerimientos de Hardware</h2>
                            <ul>


                                <li>Procesador: AMD Ryzen 7 3700U con Radeon Vega Mobile Gfx a 2.30 GHz</li>
                                <li>Memoria RAM : 16,0 GB (13,9 GB usable)</li>
                                <li>Tipo de sistema: Sistema operativo de 64 bits, procesador basado en x64</li>
                                Conexión a Internet: Requerida para el modo multijugador
                            </ul>

                            <h2>Requerimientos de Software</h2>
                            <ul>
                                <li>Sistema operativo: Windows 10 o superior</li>
                                <li>Navegador web: Google Chrome, Firefox o Edge</li>
                                <li>Herramientas de desarrollo: Visual Studio Code</li>
                                <li>Base de datos: MySQL</li>
                                <li>Frameworks: Librerías de JavaScript según sea necesario</li>
                                <li>Figma: Para diseño de interfaz y prototipos</li>
                            </ul>

                        `;
                    break;
                    case 'diagrama':
                        content.innerHTML = `
                        <h2>Diagrama casos de uso</h2>
                        <p>A continuación se presenta el diagrama de casos de uso:</p>
                        <a href="docs/Diagrama.pdf" target="_blank" class="btn btn-primary">Ver diagrama</a>
                        `;
                        break;
                        case 'excel':
                        content.innerHTML = `
                        <h2>Excel</h2>
                        <p>A continuación se presenta la cotización:</p>
                        <a href="docs/excel.xlsx" target="_blank" class="btn btn-primary">Ver excel</a>
                        `;
                        break;
                        case 'ficha':
                            content.innerHTML = `
                            <h2>Ficha Tecnica</h2>
                            <p>A continuación se presenta la ficha tecnica de Sajuro:</p>
                            <a href="docs/FichaTecnica.xlsx" target="_blank" class="btn btn-primary">Ver Ficha Tecnica</a>
                            `;
                            break;
                            case 'rubrica':
                                content.innerHTML = `
                                <h2>Rubrica</h2>
                                <p>A continuación se presenta la rubrica del equipo evaluado:</p>
                                <a href="docs/rubrica.docx" target="_blank" class="btn btn-primary">Ver Rubrica</a>
                                `;
                                break;
                                case 'informe':
                                content.innerHTML = `
                                <h2>Informe</h2>
                                <p>A continuación se presenta el informe tecnico:</p>
                                <a href="docs/informe_Tecnico.docx" target="_blank" class="btn btn-primary">Ver Informe Tecnico</a>
                                `;
                                break;
        default:
            content.innerHTML = `<h2>Bienvenido Sajuro</h2><p>Selecciona una sección del menú para ver más información.</p>`;
            break;
    }
}
