<template>
    <v-layout>
        <v-btn
            fab
            bottom
            right
            color="pink"
            dark
            fixed
            @click="dialog = !dialog">
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title class="grey lighten-4 py-4 title">
                    Register
                </v-card-title>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 align-center justify-space-between>
                            <form-wizard title="" subtitle='' color="#1565c0">
                                <tab-content title="Personal details"
                                            icon="person_pin">
                                        <v-form>
                                            <v-container>
                                            <v-layout>
                                                <v-flex
                                                xs12
                                                md4>
                                                    <v-text-field
                                                        :counter="10"
                                                        label="First name"
                                                        required
                                                    ></v-text-field>
                                                </v-flex>

                                                <v-flex
                                                xs12
                                                md4
                                                >
                                                <v-text-field
                                                    :counter="10"
                                                    label="Last name"
                                                    required
                                                ></v-text-field>
                                                </v-flex>

                                                <v-flex
                                                xs12
                                                md4
                                                >
                                                <v-text-field
                                                    label="E-mail"
                                                    required
                                                ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            </v-container>
                                        </v-form>
                                </tab-content>
                                <tab-content title="Additional Info"
                                            icon="ti-settings">
                                My second tab content
                                </tab-content>
                                <tab-content title="Last step"
                                            icon="ti-check">
                                Yuhuuu! This seems pretty damn simple
                                </tab-content>
                            </form-wizard>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-btn flat color="red" @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang='ts' src='./users.ts' />