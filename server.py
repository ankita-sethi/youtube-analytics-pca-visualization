from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np
from sklearn.decomposition import PCA
import math

application = Flask(__name__)
CORS(application)  # Enable CORS

application.config['JSON_SORT_KEYS'] = False


@application.route('/calculate_PCA', methods=['GET'])
@cross_origin()
def calculate_PCA():
    dataset = pd.read_csv("./youtube_data.csv")
    pca_nona_df = dataset.drop(['rank', 'youtuber', 'title',
       'country', 'channel_type', 'country_rank', 'channel_type_rank',
     'created_month'], axis=1)
    scaler = StandardScaler()
    pca_std = scaler.fit_transform(pca_nona_df)
    pca = PCA()
    pca.fit_transform(pca_std)
    output = pd.DataFrame([], columns=['x', 'y'])
    output['x'] = list(np.arange(1, pca.n_components_ + 1, step=1))
    output['y'] = list(pca.explained_variance_ratio_)
    return jsonify({'data': output.to_dict('records')})

@application.route('/table_loading', methods=['POST'])
@cross_origin()
def table_loading():
    if request.is_json:
        data = request.json
        idi = data.get('idi')
        data = pd.read_csv("./youtube_data.csv")
        data = data.drop(['rank', 'youtuber', 'title',
       'country', 'channel_type', 'country_rank', 'channel_type_rank',
     'created_month'], axis=1)
        column_names = data.columns
        scaled_data = StandardScaler().fit_transform(data)
        data = pd.DataFrame(scaled_data, columns=column_names)
        pca_func = PCA()
        pca_func.fit_transform(data)
        if idi is not None and isinstance(idi, int) and idi > 0:
            output = pd.DataFrame(data=pca_func.components_.T[:, :idi], columns=["PC-"+str(i+1) for i in range(idi)])
        else:
            output = pd.DataFrame(data=pca_func.components_.T, columns=["PC-"+str(i+1) for i in range(pca_func.n_components_)])

        output.insert(loc=0, column='Attr', value=column_names)

        output['PCA Loading'] = output.drop(['Attr'], axis=1).apply(np.square).sum(axis=1).pow(1./2)

        PCAsort = output.sort_values(by=['PCA Loading'], ascending=False)[:4]
        
        return jsonify({'data': PCAsort.to_dict('records')})
    else:
        return jsonify({'error': 'Invalid request format'}), 400

@application.route('/scatter_plot_matrix', methods=['GET'])
@cross_origin()
def scatter_plot_data():
    data = pd.read_csv("./youtube_data.csv")
    data = data.drop(['rank', 'youtuber', 'title',
       'country', 'channel_type', 'country_rank', 'channel_type_rank',
     'created_month'], axis=1)
    kmeans = KMeans(n_clusters=4).fit(data)
    data['clusters'] = kmeans.labels_
    return jsonify({'data': data.to_dict('records')})

@application.route('/bi_plot', methods=['GET'])
@cross_origin()
def bi_plot():
    data = pd.read_csv("./youtube_data.csv")
    data = data.drop(['rank', 'youtuber', 'title',
       'country', 'channel_type', 'country_rank', 'channel_type_rank',
     'created_month'], axis=1)
    kmeans = KMeans(n_clusters=4).fit(data)
    data['clusters'] = kmeans.labels_
    data = StandardScaler().fit_transform(data.drop(["clusters"], axis=1))
    pca_func = PCA(n_components=2)
    pca_data = pca_func.fit_transform(data)
    pca_data = np.hstack((pca_data, data[:, -1].reshape(-1, 1)))  # Assuming last column is 'clusters'
    output = pd.DataFrame(pca_data, columns=['x', 'y', 'cluster'])
    components = pd.DataFrame(data=pca_func.components_.T, columns=['PC1', 'PC2'])
    return jsonify({'data': output.to_dict('records'), 'components': components.to_dict('records')})

@application.route('/scree_elbow', methods=['GET'])
@cross_origin()
def scree_elbow():
    df = pd.read_csv("./youtube_data.csv")
    df = df.drop(['rank', 'youtuber', 'title',
                  'country', 'channel_type', 'country_rank', 'channel_type_rank', 'created_month'], axis=1)
    pca_std = StandardScaler().fit_transform(df)
    n_components = min(df.shape[0], df.shape[1])
    pca_func = PCA(n_components=n_components)
    pca_result = pca_func.fit_transform(pca_std)
    output = pd.DataFrame({'x': range(1, n_components + 1), 'y': pca_func.explained_variance_})
    
    return jsonify({'data': output.to_dict('records')})

if __name__ == "__main__":
    application.run(debug=True, port=5000)