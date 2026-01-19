
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';
import { giphyApiUrl } from '../api/giphy.apiUrl';

export const getGisByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApiUrl<GiphyResponse>(`/search`, {
        params: {
            q: query,
            limit: 10,
        }
    });
    // console.log(response.data)
    return response.data.data.map(rgif => ({
        id: rgif.id,
        title: rgif.title,
        url: rgif.images.original.url,
        width: Number(rgif.images.original.width),
        height: Number(rgif.images.original.height)
    }));

}