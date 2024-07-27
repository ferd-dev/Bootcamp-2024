type WeatherData = {
    name: string;
    temperature: string;
    humidity: string;
    windSpeed: string;
}
function WeatherCard({ name, temperature, humidity, windSpeed }: WeatherData) {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p><strong>Temperature:</strong> {temperature}</p>
            <p><strong>Humidity:</strong> {humidity}</p>
            <p><strong>windSpeed:</strong> {windSpeed}</p>
        </div>
    );
}

export default WeatherCard;