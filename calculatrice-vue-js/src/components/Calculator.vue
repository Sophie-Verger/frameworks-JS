
<template>
	<div class="calculator">
		<div>
			<button v-on:click="getValue(0)">0</button>
			<button v-on:click="getValue(1)" data-id="1">1</button>
			<button v-on:click="getValue(2)" data-id="2">2</button>
			<button v-on:click="getValue(3)" data-id="3">3</button>
			<button v-on:click="getValue(4)" data-id="4">4</button>
			<button v-on:click="getValue(5)" data-id="5">5</button>
			<button v-on:click="getValue(6)" data-id="6">6</button>
			<button v-on:click="getValue(7)" data-id="7">7</button>
			<button v-on:click="getValue(8)" data-id="8">8</button>
			<button v-on:click="getValue(9)" data-id="9">9</button>    
		</div>
		<div>
			<button v-on:click="add()">+</button>
			<button v-on:click="substract()">-</button>
			<button v-on:click="divide()">/</button>
			<button v-on:click="multiplicate()">*</button>    
		</div>
		<div>
			<button v-on:click="clear()">AC</button>
			<button v-on:click="percent()">%</button>
			<button v-on:click="equal()">=</button>
		</div>
		<div>{{ total || 0 }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				total: '',
				operator: null,
				previous: null,
				operatorClicked: false,
			}
		},
		methods: {
			getValue(number) {
				if(this.operatorClicked) {
					this.total = '';
					this.operatorClicked = false;
				}
				this.total = `${this.total}${number}`;
			},
			add() {
				 this.operator = (a, b) => a + b;
				 this.setPrevious();
			},
			substract() {
				 this.operator = (a, b) => b - a;
				 this.setPrevious();
			},
			divide() {
				 this.operator = (a, b) => b / a;
				 this.setPrevious();
			},
			multiplicate() {
				 this.operator = (a, b) => a * b;
				 this.setPrevious();
			},
			percent() {
				 this.total = `${parseFloat(this.total) / 100}`;
				 this.setPrevious();
			},
			setPrevious() {
				this.previous = this.total;
				this.operatorClicked = true;
			},
			equal() {
				this.total = `${this.operator(parseFloat(this.total), parseFloat(this.previous))}`;
				this.previous = null;
			},
			clear() {
				this.total = '';
				this.previous = null;
			}
		}
	}
</script>

<style scoped>
</style>
