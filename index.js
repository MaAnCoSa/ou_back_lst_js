const cors = require('cors')
const express = require("express")
const dotenv = require('dotenv')

const app = express();

dotenv.config()

app.use( express.json() )

const options = [
    cors({
        origin: '*',
        methods: '*',
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    })
];

app.use(options)

app.listen(
    process.env.PORT,
    () => {
        console.log(`ALIVEEE on http://localhost:${process.env.PORT}`)
    }
)

app.get('/get/:id', async (req, res) => {
    const { id } = req.params

    /*

    credentials = ee.ServiceAccountCredentials(os.getenv('service_account'), key_data=get_credentials())
    ee.Initialize(credentials)

    today = datetime.date.today()
    delta = datetime.timedelta(days=60)
    prev_date = today - delta

    roi = ee.Geometry.Point(-110.97732, 29.1026)
    area = ee.Geometry.BBox(-111.14, 28.93, -110.82, 29.28)

    collection = (
        ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
        .filterDate(str(prev_date), str(today))
        .filterBounds(roi)
        .filterMetadata('CLOUD_COVER', 'less_than', 10)
        .sort("DATE_ACQUIRED", False)
    )

    if len(collection.aggregate_array('system:id').getInfo()) == 0:
        return "No images"
    
    img_date = ee.Date(collection.first().get('system:time_start')).format('YYYY-MM-dd').getInfo().split("-")

    with open('./hmo_polygon.json') as f:
        json_data = json.load(f)

    hmo = geemap.geojson_to_ee(json_data)

    hmo_img = collection.first().clip(hmo)
    STB10_hmo = hmo_img.select("ST_B10")

    ST_hmo = STB10_hmo.expression(' M * STB10 + A - 273.15', {
        'M': hmo_img.get("TEMPERATURE_MULT_BAND_ST_B10").getInfo(),
        'STB10': STB10_hmo,
        'A': hmo_img.get("TEMPERATURE_ADD_BAND_ST_B10").getInfo()
    })

    hmo_stats = geemap.image_stats(ST_hmo)
    hmo_min = hmo_stats.getInfo().get('min').get('constant')
    hmo_max = hmo_stats.getInfo().get('max').get('constant')
    hmo_mean = hmo_stats.getInfo().get('mean').get('constant')
    hmo_std = hmo_stats.getInfo().get('std').get('constant')

    # Intervalos de temperatura
    hblue_threshold = hmo_mean - (5 * hmo_std / 2)
    mblue_threshold = hmo_mean - (4 * hmo_std / 2)
    lblue_threshold = hmo_mean - (3 * hmo_std / 2)

    yellow_threshold = hmo_mean + (2 * hmo_std / 2)
    orange_threshold = hmo_mean + (3 * hmo_std / 2)
    red_threshold = hmo_mean + (4 * hmo_std / 2)

    hblue_zones = ST_hmo.lt(hblue_threshold)
    mblue_zones = ST_hmo.lt(mblue_threshold).subtract(ST_hmo.lt(hblue_threshold))
    lblue_zones = ST_hmo.lt(lblue_threshold).subtract(ST_hmo.lt(mblue_threshold))

    yellow_zones = ST_hmo.gt(yellow_threshold).subtract(ST_hmo.gt(orange_threshold))
    orange_zones = ST_hmo.gt(orange_threshold).subtract(ST_hmo.gt(red_threshold))
    red_zones = ST_hmo.gt(red_threshold)


    # Quitando los pixeles muertos
    hblue_zones = hblue_zones.updateMask(hblue_zones.neq(0))
    mblue_zones = mblue_zones.updateMask(mblue_zones.neq(0))
    lblue_zones = lblue_zones.updateMask(lblue_zones.neq(0))


    yellow_zones = yellow_zones.updateMask(yellow_zones.neq(0))
    orange_zones = orange_zones.updateMask(orange_zones.neq(0))
    red_zones = red_zones.updateMask(red_zones.neq(0))


    # Creando los poligonos
    hblue_polygons = hblue_zones.reduceToVectors(geometry=hmo)
    mblue_polygons = mblue_zones.reduceToVectors(geometry=hmo)
    lblue_polygons = lblue_zones.reduceToVectors(geometry=hmo)

    yellow_polygons = yellow_zones.reduceToVectors(geometry=hmo)
    orange_polygons = orange_zones.reduceToVectors(geometry=hmo)
    red_polygons = red_zones.reduceToVectors(geometry=hmo)

    hblue_polygon = ee_to_geojson(hblue_polygons)
    mblue_polygon = ee_to_geojson(mblue_polygons)
    lblue_polygon = ee_to_geojson(lblue_polygons)

    yellow_polygon = ee_to_geojson(yellow_polygons)
    orange_polygon = ee_to_geojson(orange_polygons)
    red_polygon = ee_to_geojson(red_polygons)


    data = {
        'id': "data" + img_date[0] + img_date[1],

        'year': img_date[0],
        'month': img_date[1],

        'mean_T': hmo_mean,
        'std_T': hmo_std,
        'min_T': hmo_min,
        'max_T': hmo_max,

        'hblue': hblue_polygon,
        'mblue': mblue_polygon,
        'lblue': lblue_polygon,

        'yellow': yellow_polygon,
        'orange': orange_polygon,
        'red': red_polygon,

        'hblue_threshold': hblue_threshold,
        'mblue_threshold': mblue_threshold,
        'lblue_threshold': lblue_threshold,

        'yellow_threshold': yellow_threshold,
        'orange_threshold': orange_threshold,
        'red_threshold': red_threshold
    }


    return jsonify(data), 200

    */

    res.status(200).json(id)
});

