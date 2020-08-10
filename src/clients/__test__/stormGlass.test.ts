import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import  stormglass_weather_3_hours  from '@test/fixtures/stormglass_weather_3_hours.json';
import stormglass_normalized_response_3_hours from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StoreGlass client', () => {
    it('should return the normalized forecast from the StoreGlass service', async ()=>{
        const lat = -33.7865412;
        const lng = 151.2888394;

        axios.get = jest.fn().mockResolvedValue({data: stormglass_weather_3_hours});

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormglass_normalized_response_3_hours);
    });
});