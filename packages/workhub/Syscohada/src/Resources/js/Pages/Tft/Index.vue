<template>
    <div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Tableau des Flux de Trésorerie (TFT) - SYSCOHADA</h5>
                        <p class="text-muted">Période du {{ fromDate }} au {{ toDate }}</p>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Rubrique</th>
                                        <th class="text-end">Montant</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-primary">
                                        <td colspan="2"><strong>I. Flux de trésorerie provenant des activités opérationnelles</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Résultat net de l'exercice</td>
                                        <td class="text-end">{{ tftData.resultat_net }}</td>
                                    </tr>
                                    <tr>
                                        <td>Dotations aux amortissements et provisions</td>
                                        <td class="text-end">{{ tftData.dotations }}</td>
                                    </tr>
                                    <tr>
                                        <td>Reprises sur amortissements et provisions</td>
                                        <td class="text-end">{{ tftData.reprises }}</td>
                                    </tr>
                                    <tr class="table-light">
                                        <td><strong>Capacité d'Autofinancement Globale (CAFG)</strong></td>
                                        <td class="text-end"><strong>{{ tftData.capacite_autofinancement }}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Variation du Besoin en Fonds de Roulement (BFR) lié à l'activité</td>
                                        <td class="text-end">{{ tftData.variation_bfr }}</td>
                                    </tr>
                                    <tr class="table-info">
                                        <td><strong>A. Flux net de trésorerie généré par l'activité</strong></td>
                                        <td class="text-end"><strong>{{ tftData.flux_tresorerie_activites_ordinaires }}</strong></td>
                                    </tr>

                                    <tr class="table-primary">
                                        <td colspan="2"><strong>II. Flux de trésorerie provenant des activités d'investissement</strong></td>
                                    </tr>
                                    <tr class="table-info">
                                        <td><strong>B. Flux net de trésorerie lié aux investissements</strong></td>
                                        <td class="text-end"><strong>{{ tftData.flux_tresorerie_investissements }}</strong></td>
                                    </tr>

                                    <tr class="table-primary">
                                        <td colspan="2"><strong>III. Flux de trésorerie provenant des activités de financement</strong></td>
                                    </tr>
                                    <tr class="table-info">
                                        <td><strong>C. Flux net de trésorerie lié aux financements</strong></td>
                                        <td class="text-end"><strong>{{ tftData.flux_tresorerie_financements }}</strong></td>
                                    </tr>

                                    <tr class="table-success mt-3">
                                        <td><strong>Variation Nette de Trésorerie (A + B + C)</strong></td>
                                        <td class="text-end"><strong>{{ tftData.variation_nette_tresorerie }}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Trésorerie à l'ouverture</td>
                                        <td class="text-end">{{ tftData.tresorerie_ouverture }}</td>
                                    </tr>
                                    <tr class="table-dark text-white">
                                        <td><strong>Trésorerie à la clôture</strong></td>
                                        <td class="text-end"><strong>{{ tftData.tresorerie_cloture }}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tftData: Object,
        fromDate: String,
        toDate: String,
    },
    setup(props) {
        return {
            tftData: props.tftData,
            fromDate: props.fromDate,
            toDate: props.toDate,
        };
    },
};
</script>

<style scoped>
.table-primary td {
    background-color: #e9ecef !important;
}
</style>
